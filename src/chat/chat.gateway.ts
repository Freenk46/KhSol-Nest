import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
    ConnectedSocket,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  import { ChatService } from './chat.service';
  import { SendMessageDto } from './dto/send-message.dto';
  import { generateBotReply } from './utils/bot-reply';
  
  @WebSocketGateway({
    cors: {
      origin: '*', // შეცვალე საჭიროებისამებრ
    },
  })
  export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server!: Server;
  
    constructor(private readonly chatService: ChatService) {}
  
    handleConnection(client: Socket) {
      console.log(`📡 Client connected: ${client.id}`);
    }
  
    handleDisconnect(client: Socket) {
      console.log(`❌ Client disconnected: ${client.id}`);
    }
  
    @SubscribeMessage('send_message')
    async handleSendMessage(
      @MessageBody() dto: SendMessageDto,
      @ConnectedSocket() client: Socket
    ): Promise<void> {
      try {
        // იმიტაცია: თუ ტექსტი შეიცავს "fail", ძალით ვაბრუნებთ ack: fail
        if (process.env.NODE_ENV === 'development' && dto.text?.toLowerCase().includes('fail')) {
            client.emit('ack', { status: 'fail', tempId: dto.tempId });
            return;
          }
    
        const savedUserMessage = await this.chatService.sendMessage(dto);
        this.server.emit('new_message', savedUserMessage);
    
        client.emit('ack', {
          status: 'ok',
          _id: savedUserMessage._id,
          tempId: dto.tempId,
        });
    
        if (dto.sender === 'user' && dto.text) {
          const botText = generateBotReply(dto.text);
          const botMessage = await this.chatService.sendMessage({
            sessionId: dto.sessionId,
            text: botText,
            sender: 'bot',
            type: 'text',
          });
    
          setTimeout(() => {
            this.server.emit('new_message', botMessage);
          }, 1500);
        }
      } catch (error) {
        console.error('❌ Message error:', error);
        client.emit('ack', { status: 'fail', tempId: dto.tempId });
      }
    }
    
  }
  
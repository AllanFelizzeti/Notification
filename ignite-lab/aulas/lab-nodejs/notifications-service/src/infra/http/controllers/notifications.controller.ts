import { Controller, Post, Body } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send.notification';
import { CreateNotificationBody } from '../dtos/create-notificaton-body';

@Controller()
export class NotificationController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody){
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification };
   }
}

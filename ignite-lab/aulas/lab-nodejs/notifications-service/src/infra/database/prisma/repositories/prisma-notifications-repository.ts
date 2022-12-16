import { Notification } from "../../../../application/entities/notification";
import { NotificationsRepository } from "../../../../application/repositories/notification-repository";
import { PrismaService } from "../prisma.service";

export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.valeu,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      }
    })
  }
}
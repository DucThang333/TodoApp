import { PriorityEnum, StatusEnum } from "@/types/card";

export function getLabelStatus(status: StatusEnum): string {
  switch (status) {
    case StatusEnum.PENDING:
      return "chưa hoàn thành";
    case StatusEnum.IN_PROGRESS:
      return "đang được thực hiện";
    case StatusEnum.COMPLETED:
      return "đã hoàn thành";
    case StatusEnum.CANCELLED:
      return "đã hủy";
    default:
      return "Unknown Status";
  }
}

export function getStyleStatus(status: StatusEnum) {
  switch (status) {
    case StatusEnum.PENDING:
      return {
        backgroundColor: "#4676ffe0",
      };
    case StatusEnum.IN_PROGRESS:
      return {
        backgroundColor: "rgb(197 193 64 / 88%)",
      };
    case StatusEnum.COMPLETED:
      return {
        backgroundColor: "#81e351e0",
      };
    case StatusEnum.CANCELLED:
      return {
        backgroundColor: "#e04848",
      };
    default:
      return {
        backgroundColor: "gray",
      };
  }
}

export function getStylePriority(priority: PriorityEnum) {
  switch (priority) {
    case PriorityEnum.LOW:
      return {
        backgroundColor: "gray",
      };
    case PriorityEnum.MEDIUM:
      return {
        backgroundColor: "#f0eb4ce0",
      };
    case PriorityEnum.HIGH:
      return {
        backgroundColor: "#f0eb4ce0",
      };
    case PriorityEnum.URGENT:
      return {
        backgroundColor: "#e04848",
      };
    default:
      return {
        backgroundColor: "black",
      };
  }
}

export function getLabelPriority(priority: PriorityEnum): string {
  switch (priority) {
    case PriorityEnum.LOW:
      return "Thấp";
    case PriorityEnum.MEDIUM:
      return "Trung bình";
    case PriorityEnum.HIGH:
      return "Cao";
    case PriorityEnum.URGENT:
      return "Khẩn cấp";
    default:
      return "Unknown Priority";
  }
}

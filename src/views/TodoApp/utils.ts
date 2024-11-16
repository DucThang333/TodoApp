import { PriorityEnum, StateEnum } from "@/application/domain/models/Task";

export function getLabelState(status: StateEnum): string {
  switch (status) {
    case StateEnum.PENDING:
      return "Chưa hoàn thành";
    case StateEnum.IN_PROGRESS:
      return "Đang được thực hiện";
    case StateEnum.COMPLETED:
      return "Đã hoàn thành";
    case StateEnum.CANCELLED:
      return "Đã hủy";
    default:
      return "Unknown Status";
  }
}

export function getStyleState(status: StateEnum) {
  switch (status) {
    case StateEnum.PENDING:
      return {
        backgroundColor: "#4a75f27a",
        color:"#3647ce"
      };
    case StateEnum.IN_PROGRESS:
      return {
        backgroundColor: "#e7e25f96",
        color:"#76764a"
      };
    case StateEnum.COMPLETED:
      return {
        backgroundColor: "#81e3517d",
        color:"#097609"
      };
    case StateEnum.CANCELLED:
      return {
        backgroundColor: "#e048485c",
        color:"#d30000c2"
      };
    default:
      return {
        backgroundColor: "gray",
        color:"black"
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

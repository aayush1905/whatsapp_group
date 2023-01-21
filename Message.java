public class Message extends User {

     //inherit id from user class

    User user = new User();
    String id  = user.id;

    String userId;
    String groupId;
    String type;
    String sentAt;
    String deliveredAt;
    String seenAt;
}
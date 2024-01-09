import { connect } from "amqplib";

const connection = await connect("amqp://admin:devP@ssw0rd@localhost:5672/");
const channel = await connection.createChannel();

for (let i = 0; i < 10; i++) {
  channel.publish("notification", "sms", Buffer.from(`SMS ke ${i}`), {
    headers: {
      sample: "value",
    },
  });
}

await channel.close();
await connection.close();

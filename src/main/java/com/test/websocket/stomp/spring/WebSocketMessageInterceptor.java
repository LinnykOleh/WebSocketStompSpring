package com.test.websocket.stomp.spring;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.support.ChannelInterceptorAdapter;

public class WebSocketMessageInterceptor extends ChannelInterceptorAdapter {

	private static final Logger LOGGER = LoggerFactory.getLogger(WebSocketMessageInterceptor.class);

	@Override
	public void postSend(Message<?> message, MessageChannel channel, boolean sent) {
		super.postSend(message, channel, sent);
		System.out.println("postSend: channel=" + channel + "payload=" +message.getPayload() + "sent=" + sent);
	}

	@Override
	public Message<?> preSend(Message<?> message, MessageChannel channel) {
		System.out.println("preSend: channel=" + channel + "payload=" + message.getPayload());
		return super.preSend(message, channel);
	}

	@Override
	public boolean preReceive(MessageChannel channel) {
		System.out.println("preReceive: channel=" + channel);
		return super.preReceive(channel);
	}

	@Override
	public Message<?> postReceive(Message<?> message, MessageChannel channel) {
		System.out.println("postReceive: channel=" + channel + "payload= "+ message.getPayload());
		return super.postReceive(message, channel);
	}

	@Override
	public void afterSendCompletion(Message<?> message, MessageChannel channel, boolean sent, Exception ex) {
		System.out.println("afterSendCompletion: channel=" + channel + "payload="+  message.getPayload() + "sent=" + sent+  "ex=none");
		super.afterSendCompletion(message, channel, sent, ex);
	}

	@Override
	public void afterReceiveCompletion(Message<?> message, MessageChannel channel, Exception ex) {
		System.out.println("afterReceiveCompletion: channel=" + channel + "payload=" + message.getPayload() + "ex=none");
		super.afterReceiveCompletion(message, channel, ex);
	}
}

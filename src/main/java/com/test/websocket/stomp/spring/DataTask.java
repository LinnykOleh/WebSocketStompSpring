package com.test.websocket.stomp.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@EnableScheduling
public class DataTask {

	@Autowired
	private SimpMessageSendingOperations messagingTemplate;

	@Scheduled(fixedRate = 2000)
	public void reportCurrentTime() {
		messagingTemplate.convertAndSend("/topic/test", "Test:" + System.currentTimeMillis());
	}
}

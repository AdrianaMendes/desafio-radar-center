package com.backend.radar.center.config;

import org.apache.commons.dbcp2.BasicDataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatabaseConfig {

	@Value("${db.host}")
	private String host;

	@Value("${db.port}")
	private String port;
	
	@Value("${db.database}")
	private String database;

	@Value("${db.username}")
	private String username;

	@Value("${db.password}")
	private String password;
	
	private static final Logger logger = LoggerFactory.getLogger(DatabaseConfig.class);

	@Bean
	BasicDataSource dataSource() 	{
		String dbUrl = "jdbc:postgresql://" + host + ':' + port + '/' + database;
		
		logger.info("DATABASE URL: " + dbUrl);

		BasicDataSource basicDataSource = new BasicDataSource();
		basicDataSource.setUrl(dbUrl);
		basicDataSource.setUsername(username);
		basicDataSource.setPassword(password);

		return basicDataSource;
	}
}
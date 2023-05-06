package com.backend.radar.center.models.dtos;

import java.util.Date;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.backend.radar.center.models.enums.VehicleClassEnum;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class RecordCreateDto {
	@Min(value = 80, message = "Valor não pode ser inferior à 100")
	@Max(value = 100, message = "Valor não pode ser superior à 100")
	@ApiModelProperty(value = "Velocidade", example = "90")
	private Double speed;
	
	@Pattern(regexp = "[A-Z]{3}\\d[A-Z]\\d{2}", message = "Placa do automóvel inválido, não corresponde o padrão Mercosul")
	@ApiModelProperty(value = "Placa do automóvel Mercosul", example = "ABC1D23")
	private String licensePlate;
	
	@NotNull(message = "Data obrigatório")
	@ApiModelProperty(value = "Horário do registro", example = "2023-01-01T12:00:00.000Z")
	private Date time;
	
	@NotNull(message = "Classe do veículo obrigatório")
	@ApiModelProperty(value = "Classe do veículo", example = "BUS")
	private VehicleClassEnum vehicleClass;
}

/*
4°
  Fazer um select das tabelas ATENDIME e PACIENTE, deve-se retornar os
  dados: código do atendimento, data do atendimento, matrícula do
  paciente, nome do paciente, sexo, data de nascimento e cor. Atenção, o
  retorno da consulta deve possuir retorno para todos os campos
  especificados.
  Retorno válido:
  9999, 2021-11-10, 8888, José ..., M, 1981-03-17, P
  Retorno inválido:
  9999, 2021-11-10, , José ..., , 1981-03-17, P
*/

SELECT
  a.codigo_atendimento AS codigo_atendimento,
  a.data_atendimento AS data_atendimento,
  COALESCE(p.matricula_paciente, '') AS matricula_paciente,
  COALESCE(p.nome_paciente, '') AS nome_paciente,
  COALESCE(p.sexo, '') AS sexo,
  COALESCE(p.data_nascimento, '') AS data_nascimento,
  COALESCE(p.cor, '') AS cor
FROM
  ATENDIME a
INNER JOIN
  PACIENTE p ON a.matricula_paciente = p.matricula_paciente;

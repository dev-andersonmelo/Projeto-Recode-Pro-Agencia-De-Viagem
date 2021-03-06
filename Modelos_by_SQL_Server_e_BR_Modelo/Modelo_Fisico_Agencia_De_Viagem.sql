USE [AgenciaDeViagem01]
GO
/****** Object:  Table [dbo].[cliente]    Script Date: 24/03/2022 20:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cliente](
	[id_cliente] [bigint] IDENTITY(1,1) NOT NULL,
	[cpf] [varchar](255) NULL,
	[data_nasc] [varchar](255) NULL,
	[email_cliente] [varchar](255) NULL,
	[endereco_cliente] [varchar](255) NULL,
	[nome_cliente] [varchar](255) NULL,
	[telefone_cliente] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_cliente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[viagem]    Script Date: 24/03/2022 20:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[viagem](
	[id_viagem] [bigint] IDENTITY(1,1) NOT NULL,
	[data_ida] [varchar](255) NULL,
	[data_volta] [varchar](255) NULL,
	[destino] [varchar](255) NULL,
	[origem] [varchar](255) NULL,
	[preco_total] [float] NOT NULL,
	[id_cliente] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_viagem] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[viagem]  WITH CHECK ADD  CONSTRAINT [FKegug0micpawq5wfigmiq21skg] FOREIGN KEY([id_cliente])
REFERENCES [dbo].[cliente] ([id_cliente])
GO
ALTER TABLE [dbo].[viagem] CHECK CONSTRAINT [FKegug0micpawq5wfigmiq21skg]
GO

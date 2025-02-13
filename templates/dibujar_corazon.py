# dibujar_corazon.py
import turtle

# Configuración de la ventana
ventana = turtle.Screen()
ventana.bgcolor("white")  # Fondo blanco
ventana.title("Corazón Rosa")

# Configuración de la pluma
pluma = turtle.Turtle()
pluma.shape("turtle")
pluma.color("pink")  # Color rosa
pluma.speed(5)  # Velocidad de dibujo
pluma.pensize(3)  # Grosor de la línea

# Función para dibujar un corazón
def dibujar_corazon():
    pluma.begin_fill()
    pluma.fillcolor("pink")  # Relleno rosa
    pluma.left(50)
    pluma.forward(133)
    pluma.circle(50, 200)
    pluma.right(140)
    pluma.circle(50, 200)
    pluma.forward(133)
    pluma.end_fill()

# Dibujar el corazón
dibujar_corazon()

# Ocultar la pluma y finalizar
pluma.hideturtle()
turtle.done()
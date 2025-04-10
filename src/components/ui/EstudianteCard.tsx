type EstudianteCardProps = {
    nombre: string;
    edad: number;
};
  
  function EstudianteCard({ nombre, edad }: EstudianteCardProps) {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid black', padding: '10px', margin: '10px' }}>
        <p><strong>Nombre: </strong>{nombre} </p>
        <p><strong>Edad: </strong>{edad} años</p>
      </div>
    );
  }
  
  export default EstudianteCard;
  
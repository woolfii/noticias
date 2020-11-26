{
    noticias.map((noti, i) => {
        if(i==0){
            return(
                <div className="carousel-item active">
                    <Link to={`/noticia/${noti._id}`}>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`http://localhost:3000/img/${noti.imagen}.jpg`} className="rounded" style={estiloImagen}/>
                        </div>
                        <div className="col-md-6 text-white mt-3">
                            <h3 >{noti.titulo}</h3>
                            <h5 className="text-justify">{noti.subtitulo}</h5> 
                        </div>
                    </div>
                    </Link>
                </div>  
            )
        }
        else{
            return(
                <div className="carousel-item">
                    <Link to={`/noticia/${noti._id}`}>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`http://localhost:3000/img/${noti.imagen}.jpg`} className="rounded" style={estiloImagen}/>
                        </div>
                        <div className="col-md-6 text-white mt-3">
                            <h3 >{noti.titulo}</h3>
                            <h5 className="text-justify">{noti.subtitulo}</h5> 
                        </div>
                    </div>
                    </Link>
                </div>   
                )
        }
    })
}

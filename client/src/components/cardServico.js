import React from 'react';
import { Link } from "react-router-dom";
import Divider from "./divider";

const CardServico = ({ servicos }) => {
    // let date = new Date(servicos.data)
    // let dia = date.getDate();
    // let mes = date.getMonth() + 1;
    // let ano = date.getFullYear();
    // let dataFormatada = 
    // console.log(date);

    // let formatData = servicos.data

    function getDate(data) {
        var currentTime = new Date(data),
            month = '' + (currentTime.getMonth() + 1),
            day = '' + currentTime.getDate(),
            year = currentTime.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [day, month, year].join('/');
    }

    return (
        <div className="col-md-3">
            <div key={servicos.id} className="card">
                <div className="card__header card-header">{servicos.nome}</div>
                <div className="card__body card-body">
                    <div className="card-title text-center">
                        <h4>{servicos.cliente}</h4>
                    </div>
                    <Divider />
                    <div className="body__data text-left">
                        <img src="/img/icon/calendar-5.svg" />
                        <span>{getDate(servicos.data)}</span>
                    </div>
                    <div className="body__anotacoes text-left">
                        <img src="/img/icon/note.svg" />
                        <span>Anotações:</span>
                        <p>{servicos.anotacoes}</p>
                    </div>
                </div>
                {/* <div className="card__footer card-footer text-center">
                    <Link to={{
                        pathname: `/Historico/${servicos.id}`,
                        state: { servicos: { servicos } }
                    }}>Visualizar</Link>
                </div> */}
            </div>
        </div>
    );
};

export default CardServico;
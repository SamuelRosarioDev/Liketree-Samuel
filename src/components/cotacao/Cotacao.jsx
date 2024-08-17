import React, { useState, useEffect } from "react";
import axios from "axios";

import IconBitCoin from "../../assets/icons-coins/bitcoin.svg"
import IconEuro from "../../assets/icons-coins/euro.svg"
import IconUSD from "../../assets/icons-coins/usd.svg"
import IconBrl from "../../assets/icons-coins/brl.svg"

import { CotacaoStates } from "./styler";

export default function Cotacao() {
    const [flag, setFlag] = useState(null);
    const [state, setState] = useState(null);
    const [value, setValue] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL";
                const response = await axios.get(url);
                const cotacao = response.data
                const listFlags = [IconUSD, IconEuro, IconBitCoin]

                setFlag(listFlags[2])
                setState(cotacao.BTCBRL.code)
                setValue(cotacao.BTCBRL.bid);
        
                let i = 0
                setInterval(() => {
                    const indexList = i >= listFlags.length ? 0 : i
                    const list = listFlags[indexList]

                    if (indexList < 3) {
                        setFlag(list)
                        setState(indexList === 0 ? cotacao.USDBRL.code : indexList === 1 ? cotacao.EURBRL.code : indexList === 2 ? cotacao.BTCBRL.code : "Erro")
                        setValue(indexList === 0 ? cotacao.USDBRL.bid : indexList === 1 ? cotacao.EURBRL.bid : indexList === 2 ? cotacao.BTCBRL.bid : "Erro");
                    }
                    i++
                }, 5000);

            } catch (error) {
                console.log(error);

            }
        };
        fetchData();
    }, []);

    const valueFormant = Number.parseFloat(value).toFixed(2)
    return (
        <CotacaoStates>
            <div>
                <img width={30} src={flag} alt="img flag" />
                <span>{state}</span>
                <span>{valueFormant}</span>
            </div>
            <img width={30} src={IconBrl} alt="icon brl" />
        </CotacaoStates>
    );
}

import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

const Container = styled.div``;

const PriceInfoList = styled.ul`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

const NowPrice = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;
  padding: 10px;

  span {
    padding: 10px 0px;
  }

  span: first-child {
    color: gray;
    font-weight: bold;
  }
  span: last-child {
    font-size: 26px;
    margin-bottom: 15px;
    font-weight: bold;
  }
`;

const PriceInfo = styled(NowPrice)`
  span:last-child {
    font-size: 20px;
  }
`;

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface PriceProps {
  coinId: string;
  tickersData?: PriceData;
}

function Price({ coinId, tickersData }: PriceProps) {
  const [data, setData] = useState<PriceData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(tickersData);
    setLoading(false);
  }, [coinId, tickersData]);

  console.log(data);

  return (
    <Container>
      <PriceInfoList>
        <NowPrice>
          <span> Price - Last Updated : {data?.last_updated.slice(0, 10)}</span>
          <span>$ {data?.quotes.USD.price.toLocaleString()}</span>
        </NowPrice>
        <PriceInfo>
          <span>Market Cap</span>
          <span>$ {data?.quotes.USD.market_cap.toLocaleString()}</span>
        </PriceInfo>
        <PriceInfo>
          <span> Market Change 24h</span>
          <span>{data?.quotes.USD.percent_change_1h}%</span>
        </PriceInfo>
      </PriceInfoList>
    </Container>
  );
}

export default Price;

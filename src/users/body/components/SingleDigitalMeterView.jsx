import React, { useEffect, useState } from "react";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import "../Body.css";
import { useNavigate, useParams } from "react-router-dom";
import Type2 from "../../../admin/components/digitalmeters/Type2";
import Type3 from "../../../admin/components/digitalmeters/Type3";
import { IoCloseSharp } from "react-icons/io5";
import Loader from "../../loader/Loader";
import Type4 from "../../../admin/components/digitalmeters/Type4";
import Type7 from "../../../admin/components/digitalmeters/Type7";
import Type6 from "../../../admin/components/digitalmeters/Type6";
import Type5 from "../../../admin/components/digitalmeters/Type5";
import Type1 from "../../../admin/components/digitalmeters/Type1";

const SingleDigitalMeterView = () => {
  const { topic, role, id } = useParams();
  const [loggedInUser, setLoggedInUser] = useState({});
  const [digitalMeterData, setDigitalMeterData] = useState(null);
  const [localLoading, setLocalLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchUserDetails();
    }
  }, [id, role, topic]);

  const fetchUserDetails = async () => {
    setLocalLoading(true);
    try {
      const res = await apiClient.get(`/auth/${role}/${id}`);
      setLoggedInUser(res?.data?.data);
      const matchedMeter = res?.data?.data?.assignedDigitalMeters?.find(
        (item) => item.topic.toLowerCase().includes(topic.toLowerCase())
      );
      setDigitalMeterData(matchedMeter || null);
    } catch (error) {
      toast.error(error?.response?.data?.error || "An error occurred");
    } finally {
      setLocalLoading(false);
    }
  };

  return (
    <div className="users_SingleDigitalMeterView_main_container">
      <section
        className="users_SingleDigitalMeterView_close_container"
        onClick={() => navigate(-1)}
      >
        <IoCloseSharp />
      </section>
      {localLoading ? (
        <div className="loading-container">
          <Loader />
        </div>
      ) : digitalMeterData ? (
        <div>
          {digitalMeterData.meterType === "Type1" && (
            <Type1
              minValue={digitalMeterData.minValue}
              maxValue={digitalMeterData.maxValue}
              topic={topic}
              unit={topic.includes("|") ? topic.split("|")[1] : ""}
            />
          )}
          {digitalMeterData.meterType === "Type2" && (
            <Type2
              minValue={digitalMeterData.minValue}
              maxValue={digitalMeterData.maxValue}
              value={10}
              topic={topic}
              tick={digitalMeterData.ticks}
              unit={topic.includes("|") ? topic.split("|")[1] : ""}
            />
          )}
          {digitalMeterData.meterType === "Type3" && (
            <Type3
              minValue={digitalMeterData.minValue}
              maxValue={digitalMeterData.maxValue}
              topic={topic}
              unit={topic.includes("|") ? topic.split("|")[1] : ""}
            />
          )}
          {digitalMeterData.meterType === "Type4" && (
            <Type4
              minValue={digitalMeterData.minValue}
              maxValue={digitalMeterData.maxValue}
              topic={topic}
              unit={topic.includes("|") ? topic.split("|")[1] : ""}
            />
          )}
          {digitalMeterData.meterType === "Type5" && (
            <Type5
              minValue={digitalMeterData.minValue}
              maxValue={digitalMeterData.maxValue}
              topic={topic}
              unit={topic.includes("|") ? topic.split("|")[1] : ""}
            />
          )}
          {digitalMeterData.meterType === "Type6" && (
            <Type6
              minValue={digitalMeterData.minValue}
              maxValue={digitalMeterData.maxValue}
              topic={topic}
              unit={topic.includes("|") ? topic.split("|")[1] : ""}
            />
          )}
          {digitalMeterData.meterType === "Type7" && (
            <Type7
              minValue={digitalMeterData.minValue}
              maxValue={digitalMeterData.maxValue}
              topic={topic}
              unit={topic.includes("|") ? topic.split("|")[1] : ""}
            />
          )}
        </div>
      ) : (
        <div className="no-data-container">
          <p style={{ margin: "0", fontSize: "24px", color: "gray" }}>
            No digital meter data available for this topic...
          </p>
        </div>
      )}
    </div>
  );
};

export default SingleDigitalMeterView;

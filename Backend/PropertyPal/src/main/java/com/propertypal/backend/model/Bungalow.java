package com.propertypal.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="bungalow")
public class Bungalow {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "property_id")
    private Long propertyId;

    @Column(name = "bungalow_name")
    private String bungalowName;

    @Column(name = "size")
    private String size;

    @Column(name = "location")
    private String location;

    @Column(name = "type")
    private String type;

    @Column(name = "photo1_url")
    private String photo1Url;

    @Column(name = "photo2_url")
    private String photo2Url;

    @Column(name = "photo3_url")
    private String photo3Url;

    @Column(name = "description")
    private String description;

    @Column(name = "address")
    private String address;

    @Column(name = "furniture")
    private String furniture;

    @Column(name = "area_size")
    private String areaSize;

    @Column(name = "posted_by")
    private String postedBy;

    @Column(name = "is_prime")
    private boolean isPrime;

	public Long getPropertyId() {
		return propertyId;
	}

	public void setPropertyId(Long propertyId) {
		this.propertyId = propertyId;
	}

	public String getBungalowName() {
		return bungalowName;
	}

	public void setBungalowName(String bungalowName) {
		this.bungalowName = bungalowName;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getPhoto1Url() {
		return photo1Url;
	}

	public void setPhoto1Url(String photo1Url) {
		this.photo1Url = photo1Url;
	}

	public String getPhoto2Url() {
		return photo2Url;
	}

	public void setPhoto2Url(String photo2Url) {
		this.photo2Url = photo2Url;
	}

	public String getPhoto3Url() {
		return photo3Url;
	}

	public void setPhoto3Url(String photo3Url) {
		this.photo3Url = photo3Url;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getFurniture() {
		return furniture;
	}

	public void setFurniture(String furniture) {
		this.furniture = furniture;
	}

	public String getAreaSize() {
		return areaSize;
	}

	public void setAreaSize(String areaSize) {
		this.areaSize = areaSize;
	}

	public String getPostedBy() {
		return postedBy;
	}

	public void setPostedBy(String postedBy) {
		this.postedBy = postedBy;
	}

	public boolean isPrime() {
		return isPrime;
	}

	public void setPrime(boolean isPrime) {
		this.isPrime = isPrime;
	}

}
---
slug: /
title: NCM Self Service Bootcamp
---

# Getting Started {#getting_started}

Welcome to the NCM Self Service Workshop.

:::info

Estimated time to complete the labs depending on your familiarity level
with Nutanix, Kubernets and Openshift concepts is as follows:

- **NCM Self Service 101** - 180 minutes to 240 minutes
- **NCM Self Service 201** - 180 minutes to 225 minutes
- **NCM Self Service 301** - 180 minutes to 270 minutes

:::

## Agenda

- NCM Self Service 101
- NCM Self Service 201
- NCM Self Service 301

## Initial Setup

- Take note of the *Passwords* being used from you RX reservation details
- Log into your virtual desktops (connection info below)
- Login to Global Protect VPN if you have access

## Cluster Assignment

The instructor will inform the attendees their assigned clusters.

## Environment Details

Nutanix Workshops are intended to be run in the Nutanix Hosted POC environment. Your cluster will be provisioned with all necessary images,networks, and VMs required to complete the exercises.

### Networking

As we are able to provide three/four node clusters and single node clusters in the HPOC environment, we need to describe each sort of cluster separately. The clusters are setup and configured differently.

#### Three/Four node HPOC clusters

Three or four node Hosted POC clusters follow a standard naming convention:

- **Cluster Name** - POC*XYZ*
- **Subnet** - 10.**42**.*XYZ*.0
- **Cluster IP** - 10.**42**.*XYZ*.37

For example:

- **Cluster Name** - POC055
- **Subnet** - 10.42.55.0
- **Cluster IP** - 10.42.55.37 for the VIP of the Cluster

Throughout the Workshop there are multiple instances where you will need to substitute *XYZ* with the correct octet for your subnet, for example:

| IP Address     |   Description |
| -------------- | --------------- |
| 10.42.*XYZ*.37 |  Nutanix Cluster Virtual IP   |
| 10.42.*XYZ*.39 |  **PC** VM IP, Prism Central |
| 10.42.*XYZ*.41  |  **DC** VM IP, NTNXLAB.local Domain Controller   |


Each cluster is configured with 2 VLANs which can be used for VMs:


|Network Name     | Address             | VLAN    | DHCP Scope|
|-----------------| ------------------- |-------- | -----------|
|Primary          | 10.42.*XYZ*.1/25    | 0       | 10.42.*XYZ*.50-10.42.*XYZ*.124|
|Secondary        | 10.42.*XYZ*.129/25  | *XYZ1*  | 10.42.*XYZ*.132-10.42.*XYZ*.253|

### Credentials

:::note

The *Cluster Password* is unique to each cluster and will be provided by the leader of the Workshop.

:::

| Credential        | Username                 | Password           |
|------------------ |------------------------- |--------------------|
| Prism Element     | admin                    | *Cluster Password* |
| Prism Central     | admin                    | *Cluster Password* |
| Controller VM     | nutanix                  | *Cluster Password* |
| Prism Central VM  | nutanix                  | *Cluster Password* |

Each cluster has a dedicated domain controller VM, **DC**, responsible for providing AD services for the **NTNXLAB.local** domain. The domain is populated with the following Users and Groups:


| Group            | Username(s)              | Password |
|-----------------| ------------------------- |------------|
| Administrators    | Administrator             | nutanix/4u | 
| SSP Admins        | adminuser01-adminuser25   | nutanix/4u | 
| SSP Developers    | devuser01-devuser25       | nutanix/4u | 
| SSP Consumers     | consumer01-consumer25     | nutanix/4u |
| SSP Operators     | operator01-operator25     | nutanix/4u |
| SSP Custom        | custom01-custom25         | nutanix/4u |
| Bootcamp Users    | user01-user25             | nutanix/4u |


## Access Instructions

The Nutanix Hosted POC environment can be accessed a number of different ways:

### Lab Access User Credentials

PHX Based Clusters: 

- **Username:** PHX-POCxxx-User01 (up to PHX-POCxxx-User20), 
- **Password:** *Provided by Instructor*

RTP Based Clusters: 

- **Username:** RTP-POCxxx-User01 (up to RTP-POCxxx-User20), 
- **Password:** *Provided by Instructor*

### Frame VDI

Login to: <https://console.nutanix.com/x/labs>

**Nutanix Employees** - Use your **NUTANIXDC** credentials
**Non-Employees** - Use **Lab Access User** Credentials

### Parallels VDI

PHX Based Clusters Login to: <https://xld-uswest1.nutanix.com>

RTP Based Clusters Login to: <https://xld-useast1.nutanix.com>

**Nutanix Employees** - Use your **NUTANIXDC** credentials
**Non-Employees** - Use **Lab Access User** Credentials

### Employee Pulse Secure VPN

Download the client:

PHX Based Clusters Login to: <https://xld-uswest1.nutanix.com>

RTP Based Clusters Login to: <https://xld-useast1.nutanix.com>

**Nutanix Employees** - Use your **NUTANIXDC** credentials
**Non-Employees** - Use **Lab Access User** Credentials

Install the client.

In Pulse Secure Client, **Add** a connection:

For PHX:

- **Type** - Policy Secure (UAC) or Connection Server
- **Name** - X-Labs - PHX
- **Server URL** - xlv-uswest1.nutanix.com

For RTP:

- **Type** - Policy Secure (UAC) or Connection Server
- **Name** - X-Labs - RTP
- **Server URL** - xlv-useast1.nutanix.com

